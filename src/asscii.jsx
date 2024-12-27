/**
@author ertdfgcvb
@title  Wireframe cube
@desc   The cursor controls box thickness and exp
*/

import { sdSegment } from './modules/sdf.jsx'
import { copy, length, vec2, add, sub, divN, mulN } from './modules/vec2.jsx'
import * as v3 from './modules/vec3.jsx'
import { smoothstep } from './modules/num.jsx'



const chars = "█▓▒░ ".split('')
const encode = "Encode:".split('')
const space = ":Space".split('')
export function boot(context, buffer, data) {
	document.body.style.cursor = 'crosshair';
}
export function main(coord, context, cursor, buffer){
	const t = context.time * 0.002
	const x = coord.x
	const y = coord.y
	const index = coord.index
	const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * 20
	// const i = Math.round(Math.abs(x + y + o)) % chars.length
	const v0 = context.cols / 4 + wave(t, y, [0.15, 0.13, 0.37], [10,8,5]) * 0.9;
	const v1 = v0 + wave(t, y, [0.12, 0.14, 0.27], [3,6,5]) * 0.8;
	const v2 = v1 + wave(t, y, [0.089, 0.023, 0.217], [2,4,2]) * 0.3;
	const v3 = v2 + wave(t, y, [0.167, 0.054, 0.147], [4,6,7]) * 0.4;
	const i = x > v3 ? 4
		: x > v2 ? 3
		: x > v1 ? 2
		: x > v0 ? 1
		: 0;
	if(i === 0){
		const r = Math.random()
		if(r > 0.3){
			return encode[x % 7]
		}
		else if( r % 0.1 === 0){
			return ' '
		}
		else{
			return space[x % 6]
		}

	}
	else{
		return chars[i];
	}
}

function wave(t, y, seeds, amps) {
	return (
		(Math.sin(t + y * seeds[0]) + 1) * amps[0]
		+ (Math.sin(t + y * seeds[1]) + 1) * amps[1]
		+ (Math.sin(t + y * seeds[2])) * amps[2]
	)
}
