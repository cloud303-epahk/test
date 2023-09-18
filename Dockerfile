FROM node:19.7-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=America/Denver

COPY . /usr/src/app/
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone
RUN npm install 
RUN npm run build

FROM node:19.7-alpine
WORKDIR /usr/src/app

ARG TZ=America/Denver
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3001
CMD ["node", "build/index.js"]