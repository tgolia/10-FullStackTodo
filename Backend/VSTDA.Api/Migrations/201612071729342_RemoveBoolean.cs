namespace VSTDA.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemoveBoolean : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Todoes", "IsHighPriority");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Todoes", "IsHighPriority", c => c.Boolean());
        }
    }
}
