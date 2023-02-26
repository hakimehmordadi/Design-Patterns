

import  { Adapter }  from './adapter';


async function main() {
    
    const adapter = new Adapter();
    console.log('data', await adapter.convert())
}

main();

