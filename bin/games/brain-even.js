#!/usr/bin/env node
import toGame from '../../src/engine.js';
import { toAskIsEven, progQuestionEven, getCorrectAnswerEven } from '../../src/index.js';

toGame(toAskIsEven, progQuestionEven, getCorrectAnswerEven);
