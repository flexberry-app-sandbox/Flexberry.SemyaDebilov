docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semyadebilov-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t semyadebilov-java/app ../../..
