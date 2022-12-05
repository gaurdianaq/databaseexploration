package org.gaurdianaq.mariadbserver;

import org.eclipse.jetty.server.Server;
import org.gaurdianaq.mariadbserver.graphql.Armour;
import org.gaurdianaq.servercommon.ServerBuilder;

public class App {
	public static void main(String[] argv) {
		Server server = ServerBuilder.buildServer("http://localhost/", 9090);
		Armour test = new Armour();
		try {
			server.start();
		} catch (Exception ex) {
			System.out.println();
		}

	}
}
