FROM node:7.2.1

EXPOSE 3000

LABEL org.label-schema.schema-version = "1.0.0-rc.1" \
      org.label-schema.name = "nerdy-movie" \
      org.label-schema.docker.cmd.devel = "docker run -d -p 3000:3000 --name nerd nerdymovie"


COPY . /src
WORKDIR /src
RUN npm install && npm run build

# ENV Vars for emulator... override with -e DOCUMENTDB_URI="https..."
ENV DOCUMENTDB_URI='https://localhost:8081'
ENV DOCUMENTDB_KEY='C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='

ENTRYPOINT ["npm", "start"]
