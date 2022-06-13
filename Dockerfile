FROM evdtr.ad.infosys.com/tradeedge/nodejs:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD [ "node", "server.js" ]