package com.sfeir.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.JAXBElement;

import com.sfeir.domain.AppDao;
import com.sfeir.domain.Attender;
import com.sfeir.tools.business.AttenderVO;
import com.sfeir.tools.helper.ConverterHelper;

@Path("/attenders")
public class AttenderResource extends MockResource {

    private AppDao appDao = injector.getInstance(AppDao.class);

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response add(JAXBElement<AttenderVO> attender) {

        Attender entity = appDao.save(ConverterHelper.toAttender(attender.getValue()));
        if (entity != null) {
            return Response.ok(ConverterHelper.toAttenderVo(entity)).build();
        } else {
            return Response.serverError().build();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {
        return Response.ok(ConverterHelper.toAttenderVOList(appDao.all())).build();
    }

    @GET
    @Path("/ping/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public String ping(@PathParam("name") String name) {
        return "Hello " + name + " ! ";
    }

}
