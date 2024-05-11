package com.higradius;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DeleteInvoiceQuery{
	public static PreparedStatement statement;	// Creating a Statement Object.
	public static String deleteQuery = "DELETE FROM film_data WHERE film_id = (?)";
	public static void DeleteDataFromTable() {
		
		try {
		Class.forName(DataSource.jdbcDriver).newInstance();		//Creating a newInstance of the jdbc Driver.
        
        	DataSource.connectDB();

			statement = DataSource.conn.prepareStatement(deleteQuery);
			statement.setInt(1,Integer.parseInt(DeleteInvoice.film_id));
			if(statement.executeUpdate() != 0) {
				System.out.println("Data Succesfully Deleted from the table.");
			}
			else {
				System.out.println("Failed to Delete data from the database.");
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
