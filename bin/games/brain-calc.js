#!/usr/bin/env node
import toGame from '../../src/engine.js';
import { toAskCalc, progQuestionCalc, getCorrectAnswerCalc } from '../../src/index.js';

toGame(toAskCalc, progQuestionCalc, getCorrectAnswerCalc);
