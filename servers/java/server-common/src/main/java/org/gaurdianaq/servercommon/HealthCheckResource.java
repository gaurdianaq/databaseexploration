package org.gaurdianaq.servercommon;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("healthcheck")
public class HealthCheckResource {
	@GET
	@Produces("text/plain")
	public String hithere() {
		return "Hi there! Person!";
	}
}
