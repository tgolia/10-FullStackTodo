namespace VSTDA.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Todoes",
                c => new
                    {
                        TodoId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Priority = c.Int(nullable: false),
                        IsHighPriority = c.Boolean(),
                        CreatedAt = c.DateTime(),
                    })
                .PrimaryKey(t => t.TodoId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Todoes");
        }
    }
}
