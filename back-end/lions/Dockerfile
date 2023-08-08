FROM amazoncorretto:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
RUN yum update -y && yum install python3 python3-pip -y && yum install pip -y && python3 -m pip install requests && python3 -m pip install bs4
ENTRYPOINT ["java", "-jar", "/app.jar"]
