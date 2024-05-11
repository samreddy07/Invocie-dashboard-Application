package com.higradius;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


@SuppressWarnings("serial")
public class AddInvoice extends HttpServlet {
	 	
 	
	public static String film_id2;
	public static String title2;
	public static String description2;
	public static String release_year2;
	public static String language_name2;
	public static String rating2;
	public static String special_features2;
	public static String director2;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
	      throws ServletException, IOException {
	      
	      
	   }
	   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		   film_id2 = request.getParameter("l1");
		   title2 = request.getParameter("l2");
		   description2 = request.getParameter("l3");
		   release_year2 = request.getParameter("l4");
		   language_name2 = request.getParameter("l5");
		   director2 = request.getParameter("l6");
		   rating2 = request.getParameter("l7");
		   special_features2 = request.getParameter("l8");
		   		   
			      doGet(request, response);
			      AddInvoiceQuery.AddDataToTable();
	   }
}
