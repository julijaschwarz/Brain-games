#!/usr/bin/env node
import toGame from '../../src/engine.js';
import { toAskProg, progQuestionProg, getCorrectAnswerProg } from '../../src/index.js';

toGame(toAskProg, progQuestionProg, getCorrectAnswerProg);
