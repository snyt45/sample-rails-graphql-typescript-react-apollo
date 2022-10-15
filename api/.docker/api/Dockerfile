FROM ruby:3.1.2
ENV TZ Asia/Tokyo
RUN apt-get update && apt-get install -y --no-install-recommends vim && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /api
COPY ../../Gemfile* /api/
RUN bundle install
