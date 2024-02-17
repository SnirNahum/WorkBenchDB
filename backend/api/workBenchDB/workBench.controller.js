import { json } from 'express';
import { logger } from '../../services/logger.service.js'
import { workBenchService } from './workBench.service.js';

export async function generatePrompt(req, res) {
  try { 
    const prompt = req.body
    const generatedPrompt = await workBenchService.runOpenAI(prompt)
    logger.info('Prompt generated successfully')
    res.send(generatedPrompt)
  } catch (error) {
    logger.error('Failed to generate prompt', error)
    res.status(400).send({ error: 'Failed to generate prompt' })
  }
}


