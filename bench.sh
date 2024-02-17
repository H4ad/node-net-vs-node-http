#! /bin/bash

printf '# node:net vs node:http\n\n' > README.md

printf '## node:net\n\n' >> README.md

printf '```' >> README.md
wrk -t 10 -c 512 -d 10 --latency http://localhost:3000 >> README.md
printf '```\n\n' >> README.md

printf '## node:http\n\n' >> README.md

printf '```' >> README.md
wrk -t 10 -c 512 -d 10 --latency http://localhost:3001 >> README.md
printf '```\n\n' >> README.md
