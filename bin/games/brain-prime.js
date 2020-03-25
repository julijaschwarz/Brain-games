#!/usr/bin/env node
import toGame from '../../src/engine.js';
import { toAskPrime, progQuestionEven, getCorrectAnswerPrime } from '../../src/index.js';

toGame(toAskPrime, progQuestionEven, getCorrectAnswerPrime);
