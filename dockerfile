FROM --platform=linux/amd64 node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "src/main.js"]