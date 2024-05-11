package com.higradius;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;



@SuppressWarnings("serial")
public class UpdateInvoice extends HttpServlet {
	 	
	public static String film_id1;
	public static String title1;
	public static String description1;
	public static String release_year1 ;
	public static String language_name1;
	public static String rating1;
	public static String special_features1;
	public static String director1;
	
	   public void doGet(HttpServletRequest request, HttpServletResponse response)
	      throws ServletException, IOException {
	      
	   }
	   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		   film_id1 = request.getParameter("load1");
		   title1 = request.getParameter("load2");
		   description1 = request.getParameter("load3");
		   release_year1 = request.getParameter("load4");
		   language_name1 = request.getParameter("load5");
		   director1 = request.getParameter("load6");
		   rating1 = request.getParameter("load7");
		   special_features1 = request.getParameter("load8");
		   
		   		   doGet(request, response);
		   		   UpdateInvoiceQuery.UpdateDataInTable(); // Executing the Query.
	   }
}
