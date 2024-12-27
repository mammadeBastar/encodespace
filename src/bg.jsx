import './bg.css'
import { run } from './runner.jsx'
import * as program2 from './cube.jsx'
import * as program1 from './asscii.jsx'
run(program1, { element : document.querySelector('.pre1') }).then(function(e){
}).catch(function(e) {
	console.warn(e.message)
	console.log(e.error)
})
run(program2, { element : document.querySelector('.pre2') }).then(function(e){
}).catch(function(e) {
	console.warn(e.message)
	console.log(e.error)
})

// const p = window.parent

// run(program1, {"restoreState":false}).then(e => {
//     p.dispatchEvent(new CustomEvent('build', {
//         detail: { status : 'succeded' }
//     }))
// })


