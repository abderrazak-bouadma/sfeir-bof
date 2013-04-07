package com.sfeir.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.JAXBElement;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.sfeir.AppModule;
import com.sfeir.domain.AppDao;
import com.sfeir.domain.Attender;
import com.sfeir.resource.business.AttenderVO;
import com.sfeir.resource.helper.ConverterHelper;

@Path("/attender")
public class AttenderResource {

    private Injector injector = Guice.createInjector(new AppModule());

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response add(JAXBElement<AttenderVO> attender) {
        AppDao appDao = injector.getInstance(AppDao.class);
        Attender entity = appDao.save(ConverterHelper.toAttender(attender
                .getValue()));
        if (entity != null) {
            return Response.ok(ConverterHelper.toAttenderVo(entity)).build();
        } else {
            return Response.serverError().build();
        }
    }

}
