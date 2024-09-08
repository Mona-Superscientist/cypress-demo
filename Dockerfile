FROM cypress/included:13.14.2

WORKDIR /app

COPY . .

RUN npm install

CMD ["bash"]
