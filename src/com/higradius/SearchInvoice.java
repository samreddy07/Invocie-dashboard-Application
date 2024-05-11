package com.higradius;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;



@SuppressWarnings("serial")
public class SearchInvoice extends HttpServlet {
	 	
	
	public static String title3;
	
	public static String release_year3 ;
	public static String language_name3;
	
	public static String director3;
	
	   public void doGet(HttpServletRequest request, HttpServletResponse response)
	      throws ServletException, IOException {
	      
	   }
	   public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//		   film_id1 = request.getParameter("load1");
		   title3 = request.getParameter("sam1");
		   director3 = request.getParameter("sam2");
//		   description1 = request.getParameter("load3");
//		   release_year3 = request.getParameter("sam3");
		   language_name3 = request.getParameter("sam4");
		   
//		   rating1 = request.getParameter("load7");
//		   special_features1 = request.getParameter("load8");
		   
		   		   doGet(request, response);
		   		   SearchInvoiceQuery.SearchDataInTable(); // Executing the Query.
	   }
}

