import {run} from "./apps/app";
import './main.scss'; 
import { AlertService } from "./apps/alert.service.js";
import { ComponentService } from "./apps/component.server.js"; 
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService,componentService);