import { IsInt, IsString, IsNotEmpty, Matches } from 'class-validator';

export class SensorDataDto {
  @IsInt()
  @IsNotEmpty()
  pisadas: number;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'fecha debe estar en formato YYYY-MM-DD',
  })
  fecha: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}:\d{2}:\d{2}$/, {
    message: 'hora debe estar en formato HH:MM:SS',
  })
  hora: string;
}
