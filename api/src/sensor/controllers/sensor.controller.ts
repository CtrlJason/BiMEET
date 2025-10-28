import { Controller, Post, Body, Logger, Get, Query } from '@nestjs/common';
import { SensorService } from '../services/sensor.service';
import { SensorDataDto } from '../dto/sensor-data.dto';

@Controller('api/sensor')
export class SensorController {
  private readonly logger = new Logger(SensorController.name);

  constructor(private readonly sensorService: SensorService) { }

  @Post('data')
  async receiveSensorData(@Body() sensorData: SensorDataDto) {
    this.logger.log(`📥 Datos recibidos del ESP32: ${JSON.stringify(sensorData)}`);

    try {
      const result = await this.sensorService.processSensorData(sensorData);
      this.logger.log(`✅ Datos procesados y enviados vía Socket.IO`);

      return {
        success: true,
        message: 'Datos recibidos correctamente',
        data: result,
      };
    } catch (error) {
      this.logger.error(`❌ Error procesando datos: ${error.message}`);
      throw error;
    }
  }

  // Endpoint alternativo compatible con el código actual del ESP32
  @Post('pisadas')
  async receivePisadas(@Body() sensorData: SensorDataDto) {
    return this.receiveSensorData(sensorData);
  }

  // Obtener historial paginado de pisadas
  @Get('historial')
  async getHistorial(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('fecha') fecha?: string,
    @Query('fechaInicio') fechaInicio?: string,
    @Query('fechaFin') fechaFin?: string,
    @Query('sortBy') sortBy: string = 'timestamp',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'desc',
  ) {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    this.logger.log(`📋 Solicitando historial: página ${pageNum}, límite ${limitNum}`);

    return this.sensorService.getPisadasPaginadas({
      page: pageNum,
      limit: limitNum,
      fecha,
      fechaInicio,
      fechaFin,
      sortBy,
      sortOrder,
    });
  }

  // Obtener estadísticas generales
  @Get('stats')
  async getStats() {
    return this.sensorService.getEstadisticas();
  }

  // Obtener pisadas por hora (para gráficas)
  @Get('grafica-por-hora')
  async getGraficaPorHora(@Query('fecha') fecha?: string) {
    const fechaHoy = fecha || new Date().toISOString().split('T')[0];
    return this.sensorService.getPisadasPorHora(fechaHoy);
  }
}
