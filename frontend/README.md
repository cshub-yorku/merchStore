# How to install if you have errors
1. `npm install --legacy-peer-deps`

2. Now it will show you how many vulnerabilities is in the project, if you have 6(number by Feb 27 2023) You dont have to run following command, if you have 75 run: `npm audit fix --force`

In case it throws emotion/stylized error do `npm install @emotion/styled --legacy-peer-deps`