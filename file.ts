import { qrcode } from 'https://deno.land/x/qrcode/mod.ts';
const img = await qrcode('https://www.vladilen.com');
const encoder = new TextEncoder()
const data = encoder.encode(`<img src="${img}"/>`)
await Deno.writeFile('qrcode.html', data);