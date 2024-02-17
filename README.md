# node:net vs node:http

## node:net

```Running 10s test @ http://localhost:3000
  10 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   242.04ms  381.34ms   1.99s    86.29%
    Req/Sec   342.67    433.07     1.52k    78.62%
  Latency Distribution
     50%   64.62ms
     75%  234.18ms
     90%  838.17ms
     99%    1.63s 
  28440 requests in 10.07s, 4.12MB read
  Socket errors: connect 0, read 28440, write 0, timeout 372
Requests/sec:   2823.64
Transfer/sec:    419.13KB
```

## node:http

```Running 10s test @ http://localhost:3001
  10 threads and 512 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    40.91ms  114.38ms   1.99s    98.17%
    Req/Sec     1.59k   554.91     5.05k    75.70%
  Latency Distribution
     50%   22.18ms
     75%   39.40ms
     90%   52.96ms
     99%  627.06ms
  158222 requests in 10.08s, 23.09MB read
  Socket errors: connect 0, read 0, write 0, timeout 165
Requests/sec:  15697.96
Transfer/sec:      2.29MB
```

