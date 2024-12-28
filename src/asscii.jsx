/**
@author ertdfgcvb
@title  Wireframe cube
@desc   The cursor controls box thickness and exp
*/

import { sdSegment } from './modules/sdf.jsx'
import { copy, length, vec2, add, sub, divN, mulN, abs } from './modules/vec2.jsx'
import * as v3 from './modules/vec3.jsx'
import { smoothstep } from './modules/num.jsx'



const chars = "█▓▒░ ".split('')
const encode = "ENCODE:".split('')
const space = ":SPACE".split('')
const soon = "YOUGUESS".split('')
export function boot(context, buffer, data) {
	document.body.style.cursor = 'none';
}
export function main(coord, context, cursor, buffer){
	const t = context.time * 0.002
	const f = context.frame
	const j =Math.floor(f / 3)
	const x = coord.x
	const y = coord.y
	const mx = cursor.x // column of the cell hovered
	const my = cursor.y
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
	const dis = (Math.pow((mx - x), 2) / 4 + Math.pow((my - y), 2))
	const opac = Math.floor((1 - dis / 20) * 255)
	const deci = opac.toString(16)
	if(i === 4 && ( ((dis < 10))) ){
		return  {
			char : soon[(Math.floor(my - y)*5 + j + x)%8],
			color : "#00ff41" + deci,
		}
	}
	else if(i === 0){
		if( dis < 20){
			const opac2 = Math.floor((.2 + (dis / 20)) * 255)
			const deci2 = opac2.toString(16)
			return  {
				char : soon[((x  + Math.floor(my - y) * 5 + j)%8)],
				color : "#00ff41" + deci2,
			}
		}
		const r = Math.random()
		if(r > 0.3){
			return {
				char : encode[x % 7],
				color : "#00ff41"
			}
		}
		else if( r % 0.1 === 0){
			return ' '
		}
		else{
			return {
				char : space[x % 6],
				color : "#00ff41"
			}
		}
	}
	
	else{
		return {
			char : chars[i],
			color : "#00ff41"
		}
	}
}

function wave(t, y, seeds, amps) {
	return (
		(Math.sin(t + y * seeds[0]) + 1) * amps[0]
		+ (Math.sin(t + y * seeds[1]) + 1) * amps[1]
		+ (Math.sin(t + y * seeds[2])) * amps[2]
	)
}
