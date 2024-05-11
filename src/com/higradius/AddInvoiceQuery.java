package com.higradius;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class AddInvoiceQuery{
	public static PreparedStatement statement;	// Creating a Statement Object.
	public static String insertQuery = "insert into film_data (film_id,title,description,release_year,language,director,rating,special_features) values (?,?,?,?,?,?,?,?)";
			
	public static void AddDataToTable() {
		
		try {
		Class.forName(DataSource.jdbcDriver).newInstance();		//Creating a newInstance of the jdbc Driver.
        
        	DataSource.connectDB();

			statement = DataSource.conn.prepareStatement(insertQuery);
			statement.setInt(1,Integer.parseInt(AddInvoice.film_id2));
			statement.setString(2,AddInvoice.title2);
			statement.setString(3,AddInvoice.description2);
			statement.setInt(4,Integer.parseInt(AddInvoice.release_year2));
			statement.setString(5,AddInvoice.language_name2);
			statement.setString(6,AddInvoice.director2);
			statement.setString(7,AddInvoice.rating2);
			statement.setString(8,AddInvoice.special_features2);
			
			
			if(statement.executeUpdate() != 0) {
				System.out.println("Data Added into the table succesfully");
			}
			else {
				System.out.println("Failed to add data into the database.");
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
