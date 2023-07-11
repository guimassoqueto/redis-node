import { createClient } from 'redis';

const client = createClient();
await client.connect();

let loop = true

while(loop) {
  if (client.isReady) {
    let pids = await client.get('amazon_pids');
    if (pids) { 
      console.log("pid found!")
      loop = false
      console.log(JSON.parse(pids))
      await client.del('amazon_pids')
      loop = true
    }
  } else {
    await client.connect()
  }
}