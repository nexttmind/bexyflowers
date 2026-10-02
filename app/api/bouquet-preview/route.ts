import {generatePreview,previewStatus} from '@/lib/server-ai-preview';
export async function GET(req:Request){return previewStatus(req)}
export async function POST(req:Request){return generatePreview(req)}
