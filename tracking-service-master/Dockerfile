FROM amazoncorretto:11

VOLUME /tmp

EXPOSE 8000

ADD ./tracking-server/target/tracking-server-1.0.0-SNAPSHOT.jar tracking-service-1.0.0-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "tracking-service-1.0.0-SNAPSHOT.jar"]