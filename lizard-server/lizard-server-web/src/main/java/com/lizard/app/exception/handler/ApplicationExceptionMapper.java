package com.lizard.app.exception.handler;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class ApplicationExceptionMapper implements ExceptionMapper<Exception> {

	public Response toResponse(Exception exception) {
		String error = "{\"error\":" + "\"" + exception.getMessage() + "\"}";
		return Response.status(Status.INTERNAL_SERVER_ERROR).entity(error)
				.type(MediaType.APPLICATION_JSON_TYPE).build();
	}
}
