"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorModule = void 0;
const common_1 = require("@nestjs/common");
const sensor_controller_1 = require("../controllers/sensor.controller");
const sensor_service_1 = require("../services/sensor.service");
const pisadas_repository_1 = require("../repositories/pisadas.repository");
const events_module_1 = require("../../events/module/events.module");
let SensorModule = class SensorModule {
};
exports.SensorModule = SensorModule;
exports.SensorModule = SensorModule = __decorate([
    (0, common_1.Module)({
        imports: [events_module_1.EventsModule],
        controllers: [sensor_controller_1.SensorController],
        providers: [sensor_service_1.SensorService, pisadas_repository_1.PisadasRepository],
        exports: [sensor_service_1.SensorService],
    })
], SensorModule);
//# sourceMappingURL=sensor.module.js.map