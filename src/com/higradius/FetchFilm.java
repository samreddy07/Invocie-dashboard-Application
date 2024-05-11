package com.higradius;

import com.google.gson.*;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FetchFilm extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String lim=request.getParameter("limit");
	    int l=Integer.parseInt(lim);	
				 
		String st=request.getParameter("start");
		int s=Integer.parseInt(st);
//         System.out.println(l+" "+s);
		final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		final String DB_URL = "jdbc:mysql://localhost/sakila";
		// Database credentials
		final String USER = "root";
		final String PASS = "root";

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs1 =null;
		Statement stmt1 = null;
//		String c ="SELECT COUNT(*)FROM film;" ;

		
		List<Response> demoList = new ArrayList<>();
		try {
			// STEP 2: Register JDBC driver
			Class.forName("com.mysql.jdbc.Driver");
			// STEP 3: Open a connection
			conn = DriverManager.getConnection(DB_URL, USER, PASS);
			// STEP 4: Execute a query
			stmt = conn.createStatement();
			stmt1 = conn.createStatement();
			
			String sql;
			sql = "SELECT * FROM film_data limit "+s+","+l+"";
			ResultSet rs = stmt.executeQuery(sql);
			while (rs.next()) {
				Response demo = new Response();
				demo.setFilm_id(rs.getInt("film_id"));
				demo.setTitle(rs.getString("title"));
				demo.setDescription(rs.getString("description"));
				demo.setRelease_year(rs.getInt("release_year"));
				demo.setLanguage(rs.getString("language"));
				demo.setDirector(rs.getString("director"));
				demo.setRating(rs.getString("rating"));
				demo.setSpecial_features(rs.getString("special_features"));
				demoList.add(demo);

			}
			String sql1 ="SELECT COUNT(*)FROM film_data" ;
			rs1= stmt1.executeQuery(sql1);
			rs1.next();


			 

			     
//			response.getWriter().write(test);
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
//			String jsonString = gson.toJson(demoList);
			int x = rs1.getInt(1);
			
			 String items = gson.toJson(demoList);
			 String test = "{\"total\" : \"" + x + "\"" + ", \"items\" : " + items.toString() + "}" ;
			response.setContentType("application/json");
			
			try {

//   response.getWriter().write(demoList.get(0).getNotes());
				response.getWriter().write(test);

			} catch (IOException e) {
				e.printStackTrace();
			}

			rs.close();
			stmt.close();
			conn.close();

		} catch (SQLException se) {
			// Handle errors for JDBC
			se.printStackTrace();
		} catch (Exception e) {
			// Handle errors for Class.forName
			e.printStackTrace();
		} finally {
			// finally block used to close resources
			try {
				if (stmt != null)
					stmt.close();
			} catch (SQLException se2) {
			} // nothing we can do
			try {
				if (conn != null)
					conn.close();
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}
		System.out.println("Fetched Data Successfilly!!!");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
