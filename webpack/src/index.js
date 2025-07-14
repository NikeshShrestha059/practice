import {rum} from "./apps/app";
import { AlertService } from "./apps/alert.service";
import { ComponentService } from "./apps/component.server"; 
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService,componentService);