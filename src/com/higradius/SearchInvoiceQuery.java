package com.higradius;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;





public class SearchInvoiceQuery{
	public static PreparedStatement statement;	// Creating a Statement Object.
	public static String searchQuery = "SELECT * FROM film_data WHERE title = (?) AND director = (?) AND language = (?)";
	
	public static void SearchDataInTable() {
//		AND release_year = (?)
		try {
		Class.forName(DataSource.jdbcDriver).newInstance();		//Creating a newInstance of the jdbc Driver.
        
        	DataSource.connectDB();

			statement = DataSource.conn.prepareStatement(searchQuery);
			statement.setString(1,SearchInvoice.title3);
			statement.setString(2,SearchInvoice.director3);
//			statement.setInt(3,Integer.parseInt(SearchInvoice.release_year3));
			statement.setString(3,SearchInvoice.language_name3);
//			statement.executeQuery(searchQuery);
			System.out.println("Data Succesfully Searched in the table.");
			
//			if(statement.executeQuery(searchQuery)) {
//				System.out.println("Data Succesfully Searched in the table.");
			
//			}
//			else {
//				System.out.println("Failed to Search data in the database.");
//			}
			ResultSet res = statement.executeQuery();
			if(res.next()) {
				System.out.println("Data Succesfully Searched in the table.");
				
			}
			else {
				System.out.println("Failed to Search data in the database.");
				
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

}
