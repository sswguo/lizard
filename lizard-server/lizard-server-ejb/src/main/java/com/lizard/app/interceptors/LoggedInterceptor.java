package com.lizard.app.interceptors;

import java.util.logging.Logger;

import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;

import com.lizard.app.audit.LizardLog;

@Logged
@Interceptor
public class LoggedInterceptor {

	@Inject @LizardLog Logger log;

	public LoggedInterceptor() {

	}

    @AroundInvoke
    public Object logMethodEntry(InvocationContext invocationContext)
            throws Exception {
        log.info("Entering method: "
                + invocationContext.getMethod().getName() + " in class "
                + invocationContext.getMethod().getDeclaringClass().getName());

        return invocationContext.proceed();
    }

}
