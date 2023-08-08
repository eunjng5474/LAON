FROM amazoncorretto:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
RUN set -x \
&& apt-get update
ENTRYPOINT ["java", "-jar", "/app.jar"]
