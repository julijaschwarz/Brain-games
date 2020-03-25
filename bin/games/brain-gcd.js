#!/usr/bin/env node
import toGame from '../../src/engine.js';
import { toAskGcd, progQuestionGcd, getCorrectAnswerGcd } from '../../src/index.js';

toGame(toAskGcd, progQuestionGcd, getCorrectAnswerGcd);
