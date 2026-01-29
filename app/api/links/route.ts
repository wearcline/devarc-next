import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';
// import { generateBrandedQR } from '@/lib/qr'; // Logic would move to a lib

export async function GET() {
    try {
        const links = await prisma.shortLink.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(links.map(link => ({
            id: link.id,
            code: link.shortCode,
            url: link.originalUrl,
            clicks: link.clickCount,
            expired: link.expiryDate ? link.expiryDate.toISOString().split('T')[0] : '없음',
            qr: link.qrCodeFilename ? `/uploads/qr/${link.qrCodeFilename}` : null,
            tags: link.tags ? link.tags.split(',') : [],
            has_password: !!link.password
        })));
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { url, alias, expiry, password, tags, profile_id } = data;

        if (!url) {
            return NextResponse.json({ error: 'URL이 필요합니다.' }, { status: 400 });
        }

        const code = alias || Math.random().toString(36).substring(2, 8);

        // 중복 체크
        const existing = await prisma.shortLink.findFirst({
            where: { OR: [{ shortCode: code }, { alias: code }] }
        });
        if (existing) {
            return NextResponse.json({ error: '이미 존재하는 코드입니다.' }, { status: 400 });
        }

        const qrFilename = `${uuidv4()}.png`;
        // generateBrandedQR(url, qrFilename, ...);

        const newLink = await prisma.shortLink.create({
            data: {
                originalUrl: url,
                shortCode: code,
                alias: alias || null,
                password: password || null,
                tags: tags || null,
                expiryDate: expiry ? new Date(expiry) : null,
                qrCodeFilename: qrFilename
            }
        });

        return NextResponse.json({ msg: '성공적으로 생성되었습니다.', code: newLink.shortCode }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
