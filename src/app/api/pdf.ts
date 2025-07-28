import type { NextApiRequest, NextApiResponse } from 'next';
import chromium from 'chrome-aws-lambda';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    });
    const page = await browser.newPage();
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/bilan`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({
        format: 'a4',
        printBackground: false,
        margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="bilan-carbone.pdf"');
    res.send(pdfBuffer);
}