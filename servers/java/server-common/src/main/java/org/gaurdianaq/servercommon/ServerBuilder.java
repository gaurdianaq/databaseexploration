package org.gaurdianaq.servercommon;

import org.eclipse.jetty.server.Server;
import org.glassfish.jersey.jetty.JettyHttpContainerFactory;
import org.glassfish.jersey.server.ResourceConfig;

import javax.ws.rs.core.UriBuilder;
import java.net.URI;

public class ServerBuilder {
	public static Server buildServer(String uri, int port) {
		URI baseUri = UriBuilder.fromUri(uri).port(port).build();
		ResourceConfig config = new ResourceConfig(
				GraphQLResource.class,
				HealthCheckResource.class
		);
		return  JettyHttpContainerFactory.createServer(baseUri, config);
	}
}
