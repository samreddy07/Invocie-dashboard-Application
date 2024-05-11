package com.higradius;


import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

@SuppressWarnings("serial")
//@WebServlet("/delete")
public class DeleteInvoice extends HttpServlet {
	 	
	public static String film_id;
	
	   public void doGet(HttpServletRequest request, HttpServletResponse response)
	      throws ServletException, IOException {
	      

	   }
	   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		   		   	film_id = request.getParameter("loaddata");

		   			doGet(request, response);
	   			   	   DeleteInvoiceQuery.DeleteDataFromTable();
	   }
}
