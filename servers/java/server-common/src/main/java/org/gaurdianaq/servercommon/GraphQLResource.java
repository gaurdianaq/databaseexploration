package org.gaurdianaq.servercommon;

import graphql.GraphQL;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

import io.vavr.control.Either;
import io.vavr.control.Try;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("graphql")
public class GraphQLResource {

	GraphQL graphQL;

	private SchemaParser schemaParser;
	private SchemaGenerator schemaGenerator;
	private TypeDefinitionRegistry typeRegistry;

	/*
	private TypeDefinitionRegistry buildTypeRegistry(String[] schemas) {
		TypeDefinitionRegistry typeRegistry = new TypeDefinitionRegistry();
		for (String schema : schemas) {
			typeRegistry.merge(this.schemaParser.parse(GraphQLResource.class.getResourceAsStream(schema)));
		}

		return typeRegistry;
	}*/

	public GraphQLResource() {
		schemaParser = new SchemaParser();
		schemaGenerator = new SchemaGenerator();
		this.typeRegistry = new TypeDefinitionRegistry();
		this.typeRegistry.merge(this.schemaParser.parse(GraphQLResource.class.getResourceAsStream("Character.graphql")));
		this.typeRegistry.merge(this.schemaParser.parse(GraphQLResource.class.getResourceAsStream("Item.graphql")));
		this.typeRegistry.merge(this.schemaParser.parse(GraphQLResource.class.getResourceAsStream("World.graphql")));
		this.typeRegistry.merge(this.schemaParser.parse(GraphQLResource.class.getResourceAsStream("Schema.graphql")));
		//graphQL = GraphQL.newGraphQL(schemaGenerator.makeExecutableSchema(this.typeRegistry,));
	}

	@GET
	@Consumes("application/json")
	@Produces("application/json")
	public String execute() {
		return "";
	}

}
