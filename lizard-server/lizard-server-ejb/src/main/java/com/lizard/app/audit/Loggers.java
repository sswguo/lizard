package com.lizard.app.audit;



import java.util.logging.Logger;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;

public class Loggers {

	@Produces @LizardLog Logger getLogger(InjectionPoint injectPoint){
		return Logger.getLogger(injectPoint.getMember().getDeclaringClass().getSimpleName());
	}

}
