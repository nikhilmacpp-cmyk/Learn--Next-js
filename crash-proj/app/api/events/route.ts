import { NextRequest, NextResponse } from "next/server";

let events: any[] = [];
export async function POST(req: NextRequest) {
    try {
        console.log('req', req)
        const formData = await req.formData();
        try {
            const result = Object.fromEntries(formData.entries());
            events.push(result)
        } catch (er) {
            return NextResponse.json({ message: 'Invalide Json format' }, { status: 400 })
        }
        console.log('events-res', events)
        return NextResponse.json({ message: 'sucessfull', data: events }, { status: 201 })
    } catch (e) {
        console.log('Error', e);
        return NextResponse.json({ message: 'Event creation failed', error: e instanceof Error ? e.message : 'Unknown' })
    }
}

export async function GET() {
    try {
        return NextResponse.json({
            message: "Events fetched successfully",
            data: events
        }, { status: 200 });

    } catch (er) {
        return NextResponse.json({ message: 'Event fetching failed' }, { status:500})
    }
}