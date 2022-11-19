import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./controller.js";

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const controller = new QuakesController();

controller.initPos();